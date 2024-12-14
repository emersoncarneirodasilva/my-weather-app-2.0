# My Weather App 2.0 🌦️

## Descrição Geral

O **My Weather App 2.0** é um aplicativo móvel desenvolvido com React Native e Expo, que fornece uma experiência rica e intuitiva para visualização de informações meteorológicas.

## Funcionalidades

- **Exibição do Tempo Atual**
  - Temperatura atual e sensação térmica
  - Condições do tempo em tempo real
  - Ícones animados de condições climáticas

- **Busca de Localidade**
  - Pesquisa de cidades globais
  - Atualização instantânea de informações meteorológicas

- **Previsão Horária**
  - Temperatura por hora
  - Probabilidade de chuva
  - Rolagem horizontal

- **Previsão Semanal**
  - Previsão para 3 dias
  - Temperatura mínima e máxima
  - Chances de precipitação

- **Informações Climáticas Detalhadas**
  - Índice UV
  - Precipitação
  - Pressão atmosférica
  - Velocidade e direção do vento
  - Horários de nascer e pôr do sol

- **Qualidade do Ar**
  - Índice de qualidade do ar (metodologia GB DEFRA)
  - Detalhes sobre poluentes
  - Recomendações de saúde

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Context API

## Pré-requisitos

- Node.js
- npm ou Yarn
- Expo CLI
- Dispositivo móvel ou emulador

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/weather-app.git
cd weather-app
```

2. Instale as dependências
```bash
# Com npm
npm install

# Com yarn
yarn install
```

## Executando o Projeto

```bash
# Com npm
npm start

# Com yarn
yarn start
```

## Estrutura do Projeto

```
/src
├── components/
│   ├── Search/
│   ├── CurrentWeatherDisplay/
│   ├── HourlyForecast/
│   └── ...
├── hooks/
│   ├── useBackgroundImage.ts
│   └── useWeather.ts
├── constants/
│   ├── POPPINS_FONTS.ts
│   └── weekDays.ts
└── utils/
    └── calculateOpacity.ts
```

## Melhorias Futuras

- Suporte a múltiplos idiomas
- Gráficos avançados
- Notificações meteorológicas
- Modo noturno
- Compatibilidade estendida

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Contato

Emerson Carneiro da Silva - mersiocarneiro87@gmail.com

Link do Projeto: [https://github.com/emersoncarneirodasilva/my-weather-app-2.0](https://github.com/emersoncarneirodasilva/my-weather-app-2.0)
