pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "acoolua/aji-site"
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        REGISTRY_USER = "acoolua"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push to Registry (Optional)') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub') {
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }
    }
}
