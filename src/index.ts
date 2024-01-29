import app from '@src/app';
import envConfig from '@src/config/custom-env-variables.config';

// application starting point

app.listen(envConfig.PORT, () => {
  console.log(1234);
});
