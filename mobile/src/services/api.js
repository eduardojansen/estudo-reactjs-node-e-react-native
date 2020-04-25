import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
  
});

export default api;

/**
 * iOS com Emulador: localhost
 * Android com Emulador: localhost 
 *    -Necessário a execução do comando para indicar o redirecionamento de portas> adb reverse tcp:3333 tcp:3333
 * Android com IP específico 10.0.2.2 (Android Studio) // alternativa, caso a opção acima não funcione
 * Android como dispositivo físico: IP da máquina
 * iOS com dispositivo físico: IP da máquina
 */