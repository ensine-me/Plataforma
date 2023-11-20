
#!/bin/bash

echo "Script de instalação do NGINX e configuração da plataforma"
echo ""

echo "Atualizando o sistema..."
sleep 1
sudo yum update -y

echo "Instalando NGINX..."
sudo yum install -y nginx

echo ""
echo "Digite o nome desta instância"
read -p "Para o load balancer utilize 'lb', para o web server 1 utilize 'webserver-1', para o web server 2 utilize 'webserver-2': " nome

echo ""
echo "Iniciando NGINX..."
sleep 1
sudo systemctl start nginx
sudo systemctl enable nginx

echo "Configuração NGINX"
filesysnet="/etc/sysconfig/network"
line_number=3
new_text="HOSTNAME=${nome}.sublogic.net"

echo "Adicionando hostname ao arquivo network"
sudo sed -i "${line_number}s/.*/${new_text}/" ${filesysnet}

# Configurando /etc/hosts para reconhecimento dos nomes das instâncias na rede interna
ip_lb="44.219.251.103"
ip_webserver1="3.219.100.113"
ip_webserver2="54.226.222.15"
filehosts="/etc/hosts"

# Remover linhas abaixo da terceira e adicionar as novas entradas
sudo sed -i '3,$d' ${filehosts}
sudo sh -c "echo '${ip_lb} lb.sublogic.net' >> ${filehosts}"
sudo sh -c "echo '${ip_webserver1} webserver-1.sublogic.net' >> ${filehosts}"
sudo sh -c "echo '${ip_webserver2} webserver-2.sublogic.net' >> ${filehosts}"

echo ""
echo "Iniciando configuração da plataforma"
read -p "Essa instância será utilizada como um servidor front-end? (y/n) " resposta

# Defina o caminho para onde o EFS está montado e onde a aplicação React está localizada
local_path="/home/ec2-user/Plataforma/build"

if [[ "$resposta" =~ ^[Yy]$ ]]; then
    echo "Instalando Node.js..."
    #sudo curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
    sudo yum install -y nodejs

    # Navegar para o diretório onde o EFS está montado e onde a aplicação React está
    cd "${local_path}"

    read -p "Deseja buildar a aplicação novamente? (y/n) (Isso pode demorar um pouco)" respostabuild
    if [[ "$respostabuild" =~ ^[Yy]$ ]]; then
	    echo "Instalando dependências do projeto React..."
	    sudo npm install

	    echo "Construindo aplicação React para produção..."
	    sudo npm run build
    fi

    # Configurar o Nginx para servir a aplicação React do diretório de build
    sudo tee /etc/nginx/conf.d/default.conf > /dev/null <<EOL

# Redirecionar todo o tráfego HTTP para HTTPS

server {
    listen 80;
    listen [::]:80;
    server_name ensineme.org www.ensineme.org;

    return 301 https://$host$request_uri;
}

# Configuração do servidor para HTTPS
server {
    listen 443 ssl http2;
    server_name ensineme.org www.ensineme.org; # Substitua com seus nomes de domínio reais

    # Especificar o local do certificado SSL e da chave privada
    ssl_certificate /root/.acme.sh/ensineme.org_ecc/fullchain.cer; # Caminho para o certificado completo
    ssl_certificate_key /root/.acme.sh/ensineme.org_ecc/ensineme.org.key; # Caminho para a chave privada

    # Recomendações de segurança e configurações SSL
    ssl_session_timeout 1d;
    ssl_session_cache shared:MozSSL:10m;  # about 40000 sessions
    ssl_session_tickets off;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;

    # Configuração do local do servidor
    location / {
        root /home/ec2-user/Plataforma/build; # Substitua com o caminho do diretório do seu site
        try_files $uri $uri/ /index.html;
    }

    # Outras configurações podem ser adicionadas aqui
}


EOL

    echo "Verificando configuração do nginx..."
    if sudo nginx -t; then
        echo "Configuração do nginx OK, recarregando serviço..."
        sudo systemctl reload nginx
    else
        echo "Erro na configuração do nginx. Abortando."
        exit 1
    fi
elif [[ "$resposta" =~ ^[Nn]$ ]]; then
    # ... (O restante do seu script de configuração do load balancer parece correto)
            echo "Configurando loadbalancer"
        sudo cat >/etc/nginx/conf.d/loadbalancer.conf <<EOL
server {
    listen 80;
    server_name lb.sublogic.net;

    location / {
        proxy_pass http://balance;
    }
}

upstream balance {
    server webserver-1.sublogic.net;
    server webserver-2.sublogic.net;
}
EOL
        echo "Verificando configuração do nginx..."
        if sudo nginx -t; then
            echo "Configuração do nginx OK, recarregando serviço..."
            sudo systemctl reload nginx
        else
            echo "Erro na configuração do nginx. Abortando."
            exit 1
        fi
fi

echo "Script finalizado"
sleep 1

