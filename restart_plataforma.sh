
#!/bin/bash

# Nome do arquivo que contém o processo do seu aplicativo
pid_file="./src/process.pid"

# Caminho para o seu aplicativo Node.js
app_path="./src"

# Matar o processo antigo
if [ -f $pid_file ]; then
    old_pid=$(cat $pid_file)
    echo "Matar processo antigo: $old_pid"
    kill -SIGKILL $old_pid
    rm $pid_file
else
    echo "Nenhum processo antigo encontrado."
fi

# Iniciar o aplicativo e salvar o PID
cd $app_path
nohup npm start < /dev/null &> nohup.out &
