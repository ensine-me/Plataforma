pipeline {
    agent any
     tools { 
        nodejs "Node 18.16.0" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/ensine-me/Plataforma.git']]])
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Restart plataforma') {
            steps {
                sh './restart_plataforma.sh'
            }
        }

        stage('setup plataforma') {
            steps {
                sh './setup_plataforma.sh'
            }
        }

    }
}