# My Weather App 2.0 🌦️

## Descrição Geral

**My Weather App 2.0** é um aplicativo mobile desenvolvido com React Native e Expo, que fornece uma experiência rica e intuitiva para visualização de informações meteorológicas.

## API Utilizada

- **WeatherAPI.com** (Free Weather API)
  - Fonte de dados meteorológicos em tempo real
  - Cobertura global de previsões e condições climáticas
  - Endpoint para dados atuais, previsão horária e semanal
  - Informações adicionais como qualidade do ar

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
- WeatherAPI.com

## Pré-requisitos

- Node.js
- npm ou Yarn
- Expo CLI
- Dispositivo móvel ou emulador
- Conta gratuita no WeatherAPI.com (para obtenção de API Key)

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/emersoncarneirodasilva/my-weather-app-2.0.git
cd my-weather-app-2.0
```

2. Obtenha sua API Key
- Acesse [WeatherAPI.com](https://www.weatherapi.com/)
- Crie uma conta gratuita
- Copie sua API Key

3. Configure as variáveis de ambiente
- Crie um arquivo `.env` na raiz do projeto
- Adicione sua API Key:
```
EXPO_PUBLIC_WEATHER_API_KEY=sua_api_key_aqui
```

4. Instale as dependências
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

## Limitações da API Gratuita

- Número limitado de chamadas por mês
- Algumas funcionalidades avançadas podem requerer plano pago
- Possível latência nas atualizações de dados

## Contato

Emerson Carneiro da Silva - mersiocarneiro87@gmail.com

Link do Projeto: [https://github.com/emersoncarneirodasilva/my-weather-app-2.0](https://github.com/emersoncarneirodasilva/my-weather-app-2.0)

## Imagens

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; row-gap: 30px;">
    <img src="https://github.com/user-attachments/assets/0aefe327-1d42-4e47-a605-085a57962ab8" width="45%" alt="Image 01" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/e68b546a-5590-4546-bb4e-77e66d913772" width="45%" alt="Image 02" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/47a0ebcc-f985-43a9-aae9-48ab763520b7" width="45%" alt="Image 03" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/d67e85a8-57ec-4b58-bf56-f234b3f2c422" width="45%" alt="Image 04" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/a8610c82-794d-4fb2-9b1a-da24a94e445d" width="45%" alt="Image 05" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/712b5d02-c771-4ce2-bd37-7f326a97bc02" width="45%" alt="Image 06" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/17796505-2526-4e90-a26d-e8218f675bfd" width="45%" alt="Image 07" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/f53e177f-b827-4e2f-8ba4-3ba64696dc10" width="45%" alt="Image 08" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/a98ca564-adbe-4fe4-a24f-2fdab9942fe2" width="45%" alt="Image 09" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/f038777e-2b97-4756-a9a4-6e5d80510680" width="45%" alt="Image 10" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/49a2f46c-a116-4db1-9279-242f0c3d6609" width="45%" alt="Image 11" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/7cb46a49-a5bc-495e-906d-44574b7924f6" width="45%" alt="Image 12" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/827fa57c-6f39-4585-aaf9-79f2c83a8dcb" width="45%" alt="Image 13" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <img src="https://github.com/user-attachments/assets/8e1b6256-0983-4c03-b82b-5b0eff86f524" width="45%" alt="Image 14" style="margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>
