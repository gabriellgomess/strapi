module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
    provider: 'local',
    providerOptions: {
      // Configurações específicas do seu servidor compartilhado
      server: {
        host: 'ftp.peoplemanager.com.br',
        port: 21, // Porta do servidor (FTP) ou 22 (SSH)
        user: 'u362384337.peoplemanager.com.br',
        password: 'Isadopai12345@',
        // Caminho para o diretório onde as imagens serão armazenadas
        basePath: '/uploads_images',
        // URL base para acessar as imagens
        baseUrl: 'https://peoplemanager.com.br/casadomenino/uploads_images/',
      },
    },
  },
  });
