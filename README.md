# be-demo
[contributors-shield]: https://img.shields.io/github/contributors/jdmedlock/be-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/jdmedlock/be-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jdmedlock/be-demo.svg?style=for-the-badge
[forks-url]: https://github.com/jdmedlock/be-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/jdmedlock/be-demo.svg?style=for-the-badge
[stars-url]: https://github.com/jdmedlock/be-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jdmedlock/be-demo.svg?style=for-the-badge
[issues-url]: https://github.com/jdmedlock/be-demo/issues

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
## Table of Contents

* [Overview](#overview)
* [Application Architecture](#application-architecture)
* [Installation & Configuration](#installation-configuration)
* [License](#license)


## Overview

`be-demo` is a test platform for backend application server libraries,
practices, & techniques. 

## Application Architecture

This server is built using the following main libraries, services, and tools.
For all others and for current release dependencies please consult the
`package.json` file.

| Dependency  | Description                 |
|-------------|-----------------------------|
| Dotenv      | Library for managing .env   |
| ExpressJS   | Frontend framework          |

The following backend services are invoked using a REST API:

| Route   | Description                                       |
|---------|---------------------------------------------------|
| wakeup  | Wakes up the backend when the first FE page loads |

![Wakeup](./public/wakeup.png)

## Installation & Configuration

1. Clone or fork this repo using git. Don't forget that to create a runnable application you'll also need the backend.

2. `npm install`

3. To run the app locally enter `npm run dev`

4. Open a new browser window and navigate to the URL `http://localhost:3100/wakeup`. This assumes that you haven't changed the default port number.

### Environment variables

The following environment variables must be set up for the app to run properly:

| Key             | Value                                |
|-----------------|--------------------------------------|
| PORT            | <port-number (e.g. '3100')>          |
| CLOUDINARY_URL  | cloudinary://<api-key>:<api-secret>  |
| CLOUDINARY_NAME | <your 9-character unique cloud name> |

## Release History

You can find what changed, when in the [release history](./docs/RELEASE_HISTORY.md)

## License

Copyright 2022 <COPYRIGHT Jim D. Medlock>

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
=======