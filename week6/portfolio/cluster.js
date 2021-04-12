// import modules
const os = require("os");
const cluster = require("cluster");

// setup the master file for the cluster
cluster.setupMaster({
    exec: "./index.js",
});

// divide the processes into how many CPUs that the machine has.
for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

// when the server crashing
cluster.on("exit", (worker) => {
    console.log(worker.process.pid);
    cluster.fork();
});
