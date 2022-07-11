pipeline {
    agent any

    stages {
        stage('start') {
            steps {
                echo 'start Jenkins'
            }
        }
        stage('Build') {
          steps {
            sh 'npm ci'
            sh 'npm run build'
          }
        }
    }
}
