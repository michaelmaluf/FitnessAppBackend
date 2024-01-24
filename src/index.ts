import app from './app';
import envConfig from './config/custom-env-variables.config';

// application starting point

app.listen(envConfig.PORT, () => {
  console.log(1234);
})

console.log(123);