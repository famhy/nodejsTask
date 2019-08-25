let sum = 0

for (var i =2 ; i < global.process.argv.length; i++) {
sum+=Number(global.process.argv[i])

}
console.log(sum)