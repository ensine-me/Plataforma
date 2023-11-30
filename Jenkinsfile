pipeline {
    agent {
        label 'front-plataforma' // Substitua pela label do seu agente
    }
    tools { 
        nodejs "Node 18.16.0" 
    }
    
    stages {
        stage('Git Pull') {
            steps {
                script {
                    checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'bora', url: 'https://github.com/ensine-me/Plataforma']])
                }
            }
        }
        stage("Build"){
             steps{
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}