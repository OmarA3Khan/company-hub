# Run a centos container
docker run -it centos /bin/bash

# Clone the portal codebase
git clone https://github.com/OmarA3Khan/company-hub.git

# Checkout to feature branch unless the changes are merged
git checkout feature/devops

# Navigate inside the company-hub/ansible/ directory 
# Generate the artifacts 
ansible-playbook prepare-artifacts.yaml

# N.B Edit the hosts file with the IP of the ec2-instance and Place the ssh-key i.e pem file inside /root/.ssh/ having the right access i.e read permission only to owner 


# Install NodeJS in deployment server 
ansible-playbook -i hosts install-nodejs.yaml

# Deploy the artifacts
ansible-playbook -i hosts deploy-node.yaml