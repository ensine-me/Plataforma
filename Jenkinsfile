pipeline {
    agent any
     tools { 
        nodejs "Node 18.16.0" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://PedroHFD13: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@github.com/ensine-me/Plataforma.git']]])
            }
        }
        stage ("git clone"){
             steps {
                sh 'ssh -i "ensineme-ec2-key.pem" ec2-user@ec2-3-219-100-113.compute-1.amazonaws.com'
            }
            
        }

        stage('git pull') {

            steps {
                sh 'git pull https://PedroHFD13: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@github.com/ensine-me/Plataforma.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

    }
}