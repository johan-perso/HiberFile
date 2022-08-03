> Ce repo est un fork d'[HiberFile](https://github.com/HiberFile/hiberfile) en ayant une compatibilité avec l'API d'[EteFile](https://github.com/johan-perso/etefile-api).  
> Le lien de l'api est à entrer dans le fichier .env (voir le Getting Started).  
> Cette version n'est pas compatible avec l'API originale d'HiberFile.  
> Les mentions légales et quelques autres élements n'ont pas été modifiés, et ne sont pas représentatifs de la version originale.


### Problèmes

Le site n'a eu que très peu de modifications et comporte quelques problèmes. *Si un développeur NuxtJS passe par là et veut bien contribuer, merci !*

* Lorsqu'il est obligé d'utiliser un compte (dans la configuration de l'API), mais que vous tentez d'upload un fichier sans être connecté, le site reste bloqué sur "Chargement" à l'infini.
* Il est impossible de créér/supprimer un compte, de réinisialiser un mot de passe et de définir des webhooks, puisque ces fonctionnalités n'ont pas encore été développées dans l'API.


<p align="center">
  <img
    width="400"
    src="assets/images/png/logos/transparentGradient.png"
    alt="HiberFile"
  />
</p>
<p align="center">
  <a href="https://github.com/hiberfile/hiberfile/stargazers"
    ><img
      src="https://img.shields.io/github/stars/hiberfile/hiberfile?style=flat-square"
      alt="GitHub Stars"
  /></a> 
  <a href="LICENSE"
    ><img
      src="https://img.shields.io/github/license/hiberfile/hiberfile?style=flat-square"
      alt="GPL-3.0 License"
  /></a>  
  <a href=""
    ><img
      src="https://img.shields.io/github/languages/top/hiberfile/hiberfile?style=flat-square"
          alt="Top language"/></a>
  <a href="https://twitter.com/HiberFile"
    ><img
      src="https://img.shields.io/badge/twitter-@HiberFile-1DA1F3?style=flat-square"
      alt="Follow @HiberFile on Twitter"
  /></a> 
</p>

<p align="center">
  <a href="https://hiberfile.com">Website</a>
  ·
  <a href="#🚀-quick-start">Quick start</a>
</p>

<h1></h1>

<img
  src="assets/images/gif/use-hiberfile.com.gif"
  alt="Use HiberFile"
  width="50%"
  align="right"
/>

**Free, open source and privacy friendly file host.**

<a name="🚀-quick-start"></a>

## ❓ Why

We created HiberFile to make it easy for casual users to share files. HiberFile is a free, convenient, fast and secure platform.
## 🚀 Quick start

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/download/) installed on your computer.

### Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/johan-perso/etefile-web.git
   ```

2. Install dependancies:

   ```sh
   cd etefile-web && npm install
   ```
   
3. Create the .env file and edit it (here is [an example](/.env.example)):

   ```sh
   cp .env.example .env
   [OPTIONAL] nano .env
   ```
   
   > Note that you can use your favorite editor instead of `nano`, like `vi` or `mcedit`.

4. Launch the dev server (optional):

   ```sh
   npm run dev
   ```

5. Build and deploy:

   ```sh
   npm run build && npm run generate && npm run start
   ```

## 🤝 Contributing

If you are interested in helping contribute to **HiberFile**, feel free to open a pull request.

If you are fluent in a non-English or non-French language, we greatly appreciate any help translating our website in other languages.

### Code Contributors

<!-- This project exists thanks to all the people who [contribute](https://github.com/hiberfile/hiberfile/graphs/contributors). -->

<a href="https://github.com/hiberfile/hiberfile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hiberfile/hiberfile" />
</a>

## 📝 License

© 2021 HiberFile Team

This project is [GPL-3.0](https://github.com/hiberfile/hiberfile/blob/master/LICENSE) licensed.
