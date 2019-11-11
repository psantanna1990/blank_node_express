const bunyan = require("bunyan");

var bunyanOpts = {
    name: "SONAR ANALISE API",
    streams: [
        {
            level: "debug",
            stream: process.stdout, // log INFO and above to stdout
        },
        {
            level: "info",
            path: "./logs/logs-info.json",
            serializers: {
                req: bunyan.stdSerializers.req,
                res: bunyan.stdSerializers.res,
            }, // log ERROR and above to a file
        },
        {
            level: "warn",
            path: "./logs/logs-warn.json",
            serializers: {
                req: bunyan.stdSerializers.req,
                res: bunyan.stdSerializers.res,
            }, // log ERROR and above to a file
        },
        {
            level: "error",
            path: "./logs/logs-error.json",
            serializers: {
                req: bunyan.stdSerializers.req,
                res: bunyan.stdSerializers.res,
            }, // log ERROR and above to a file
        },
    ],
};

exports.logger = bunyan.createLogger(bunyanOpts);

// exports.logger = bunyan.createLogger({
//   name: 'SONAR ANALISE API',
//   {level: process.env.LOGGER_LEVEL || 'info', path:'../../logs/logs.json'},
//   serializers: {
//     req: bunyan.stdSerializers.req,
//     res: bunyan.stdSerializers.res,
//   },
// });
