
#!/bin/bash

echo "Script de instalação do NGINX"
echo ""

echo "Atualizando o sistema e instalando NGINX..."
sleep 1
sudo yum update
sudo yum install -y nginx

echo ""
echo "Digite o nome desta instância"
read -p "Para o load balancer utilize 'lb'
para o web server 1 utilize 'webserver-1
para o web server 2 utilize 'webserver-2':" nome

echo ""
echo "Iniciando NGINX..."
sleep 1
sudo service start nginx
sudo systemctl enable nginx

#sudo systemctl stop iptables
#sudo systemctl disable iptables

echo "Configuração NGINX"
filesysnet="/etc/sysconfig/network"
line_number=3
new_text="HOSTNAME=${nome}.sublogic.net"

echo "Adicionando hostname ao arquivo network"
sudo sed -i "${line_number}s/.*/${new_text}/" ${filesysnet}

ip_lb="44.219.251.103"
line_lb=5
text_lb="${ip_lb} loadbalancer lb.sublogic.net"

ip_webserver1="3.219.100.113"
line_webserver1=6
text_webserver1="${ip_webserver1} webserver-1 webserver-1.sublogic.net"

ip_webserver2="54.226.222.15"
line_webserver2=7
text_webserver2="${ip_webserver2} webserver-2 webserver-2.sublogic.net"

filehosts="/etc/hosts"

echo ""
sleep 1
echo "Adicionando hosts das instâncias no arquivo hosts"
#sudo sed -i "${line_lb}s/.*/${text_lb}/" ${filehosts}
#sudo sed -i "${line_webserver1}s/.*/${text_webserver1}/" ${filehosts}
#sudo sed -i "${line_webserver2}s/.*/${text_webserver2}/" ${filehosts}
sudo sh -c "echo '${text_lb}' >> ${filehosts}"
sudo sh -c "echo '${text_webserver1}' >> ${filehosts}"
sudo sh -c "echo '${text_webserver2}' >> ${filehosts}"

echo ""
echo "Iniciando configuração da plataforma"
read -p "Essa instância será utilizada como um servidor front-end?" resposta
if [ "$resposta" == "y" || "$resposta" == "Y" ]; then
	echo "Iniciando instalação do NPM"
	sudo yum install npm
	npm i
	npm start &
fi

echo "Script finalizado"
sleep 1
