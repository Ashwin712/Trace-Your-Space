export const LogLevel = Object.freeze({
    WARN: "warn", 
    INFO : "info", 
    DEBUG : "debug", 
    ERROR: "error",
    LOG: "log"
  })
  
  
  const Logger = (logLevel,message) => {
    // eslint-disable-next-line default-case
    switch (logLevel) {
      case LogLevel.WARN:
        console.warn(`${message}`);
        break;
      case LogLevel.INFO:
        console.info(`${message} `);
        break;
    }
  };
  
  export default Logger;