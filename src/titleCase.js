function titleCase(string) {
  let result = ''
   string.toLowerCase().split(' ').forEach(word => {
    result +=  word[0].toUpperCase() + word.slice(1) + ' '
  })
  return result;
}

export default titleCase;