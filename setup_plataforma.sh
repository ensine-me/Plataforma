
#!/bin/bash

echo "Script de instalação do NGINX"
echo ""

echo "Atualizando o sistema e instalando NGINX..."
sleep 1
sudo apt update
sudo apt install -y nginx

echo ""
read -p "Você deseja continuar para definir uma nova senha para o usuário 'ubuntu'? (y/n): " resposta

if [[ $resposta == "y" || $resposta == "Y" ]]; then
	sudo passwd ubuntu
fi

echo ""
echo "Iniciando NGINX..."
sleep 1
sudo systemctl start nginx
sudo systemctl enable nginx

sudo ufw disable
sudo systemctl disable ufw

"Configuração NGINX"
cat /etc/sysnconfig/network

echo "Script finalizado"
sleep 1
