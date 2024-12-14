# My Weather App 2.0 🌦️

O **My Weather App 2.0** é um aplicativo móvel desenvolvido com **React Native** e **Expo**, que fornece uma experiência rica e intuitiva para a visualização de informações meteorológicas. Ele foi projetado para atender tanto às necessidades básicas de previsão do tempo quanto para oferecer detalhes técnicos e avançados sobre condições climáticas, previsões futuras e qualidade do ar.

## Visão Geral 🗺️

O aplicativo combina uma interface amigável com funcionalidades avançadas, permitindo que os usuários acompanhem o clima atual de qualquer localidade, além de receberem previsões detalhadas para as próximas horas e dias. O design adaptativo, os gráficos dinâmicos e as mensagens contextualizadas garantem uma experiência visualmente agradável e informativa.

## Funcionalidades Detalhadas 🛠️

### **1. Exibição do Tempo Atual** 
- Mostra as condições climáticas em tempo real para a localização selecionada.
- Inclui:
  - Temperatura atual e sensação térmica.
  - Condições do tempo (ensolarado, nublado, chuva, etc.).
  - Ícones animados que refletem as condições climáticas.
  - Exibição da data atual.

### **2. Busca de Localidade**
- Através de um modal de busca, o usuário pode pesquisar qualquer cidade ao redor do mundo.
- Atualiza instantaneamente as informações meteorológicas com base na localidade selecionada.

### **3. Previsão Horária**
- Exibição horizontal das condições climáticas para as próximas horas.
- Destaques:
  - Temperatura por hora.
  - Probabilidade de chuva.
  - Ícones de condições meteorológicas.
- O horário atual é centralizado automaticamente para facilitar a leitura.

### **4. Previsão Semanal**
- Exibe a previsão do tempo para os próximos 3 dias, destacando:
  - Temperatura mínima e máxima.
  - Chances de precipitação.
  - Resumo das condições do tempo.

### **5. Informações Climáticas Detalhadas**
- Uma seção dedicada para dados mais técnicos e avançados:
  - Índice UV.
  - Precipitação acumulada (mm).
  - Pressão atmosférica (hPa).
  - Velocidade e direção do vento.
  - Horários exatos do nascer e pôr do sol.

### **6. Qualidade do Ar**
- Apresenta o índice de qualidade do ar (com base na metodologia GB DEFRA).
- Detalhes sobre os poluentes monitorados:
  - PM2.5 (partículas finas).
  - PM10 (partículas inaláveis).
  - SO2 (dióxido de enxofre).
  - NO2 (dióxido de nitrogênio).
  - O3 (ozônio).
  - CO (monóxido de carbono).
- Mensagens personalizadas que interpretam o índice para facilitar a compreensão, destacando riscos e recomendações para a saúde.

---

## Diferenciais do App 🌟

1. **Interface Intuitiva**: Design elegante e minimalista com suporte para ícones dinâmicos.
2. **Atualizações em Tempo Real**: Dados sempre sincronizados com as condições mais recentes.
3. **Contexto Visual**: Imagens de fundo mudam dinamicamente para refletir o clima (chuva, sol, neve, etc.).
4. **Mensagens de Alerta Personalizadas**: Explicações fáceis sobre condições extremas de tempo ou qualidade do ar.
5. **Flexibilidade de Consulta**: Fácil troca entre cidades e visualização de informações detalhadas para diversas localidades.

---

## Tecnologias Utilizadas 💻

O projeto utiliza ferramentas modernas para garantir desempenho, escalabilidade e uma experiência rica para o usuário:

- **React Native**: Framework para desenvolvimento móvel multiplataforma.
- **Expo**: Ferramenta para simplificar o desenvolvimento e deploy de aplicativos.
- **TypeScript**: Adição de tipagem estática para maior segurança e previsibilidade no código.
- **React Navigation**: Gerenciamento de navegação entre as telas.
- **Expo Google Fonts**: Para uma tipografia estilosa e consistente.
- **Context API**: Para gerenciar estados globais, como dados meteorológicos.

---

## Estrutura do Projeto 📂

### **Componentes**
- **Search**: Modal para busca de localidade.
- **CurrentWeatherDisplay**: Componente que exibe as condições climáticas atuais.
- **HourlyForecast**: Previsão detalhada das próximas horas, com rolagem horizontal.
- **WeeklyForecast**: Previsão para os próximos 3 dias, com informações de temperatura e chance de chuva.
- **CurrentInformation**: Exibe informações climáticas detalhadas (vento, pressão, etc.).
- **AirQuality**: Mostra dados sobre a qualidade do ar e mensagens interpretativas.
- **ContainerWithData**: Container principal que organiza as previsões e detalhes.

### **Hooks**
- `useBackgroundImage`: Define imagens de fundo com base nas condições do tempo.
- `useWeather`: Gerencia o estado global dos dados meteorológicos.

### **Constantes**
- `POPPINS_FONTS`: Configuração de fontes do projeto.
- `weekDays`: Array com os dias da semana para as previsões.

### **Utils**
- `calculateOpacity`: Função que ajusta dinamicamente a opacidade do container principal conforme a rolagem.

---

## Melhorias Planejadas 🚀

1. **Múltiplos Idiomas**: Suporte para diferentes idiomas.
2. **Gráficos Avançados**: Representação gráfica para previsões horárias e semanais.
3. **Notificações Meteorológicas**: Alerta sobre mudanças climáticas baseadas na localização.
4. **Modo Noturno**: Tema escuro automático baseado no horário.
5. **Compatibilidade Estendida**: Design responsivo para dispositivos menores.

---

## Como Instalar e Executar 🏃‍♂️

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/weather-app.git
