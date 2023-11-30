pipeline {
    agent {
        label 'front-plataforma' // Substitua pela label do seu agente
    }
    tools { 
        nodejs "Node 18.16.0" 
    }
    
    stage('Git Pull') {
       steps {
            script {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'bora', url: 'https://github.com/ensine-me/Plataforma']])
            }
        }
        steps{
            sh "npm install"
            sh "npm run build"
        }
    }
}