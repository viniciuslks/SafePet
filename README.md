# SafePet
1-instalar git(com o mesmo usuário que me passaram)
2- instalar node+npm
3- clonar o projeto.No prompt de comando/terminal: git clone https://github.com/SafePet-Devs/SafePet.git
4 -No prompt de comando/terminal: git pull origin master 

# Workflow Git

1- git pull origin master(para atualizar sua master local com a master remota)
2- git status (para conferir se veio o que deveria vir)
3- git checkout -b <nome-da-branch> (para criar uma nova branch)
--- depois de programar...
4- git add <arquivos-que-alterou-e-quer-adicionar-ao-commit>
5- git commit -m "mensagem do commit" (coloca em um pacote as alterações que você quer subir)
6- git pull origin master (para evitar conflitos)
7- git push origin <nome-da-branch> (para solicitar a publicação da sua branch, ela aguardará que alguém com permissão execute "git merge" na sua branch )
8- git checkout master (para voltar pra master local)
9- volta pro 1.