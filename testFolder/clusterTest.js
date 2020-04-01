const cluster = require('cluster');
const CPUS = require('os').cpus().length;

console.log('cpus', CPUS, cluster.isMaster, typeof CPUS);

if(cluster.isMaster) {
    console.log(1)
    for(let i = 0; i < CPUS; i++) {
        console.log('success')
        cluster.fork();
    }
}
