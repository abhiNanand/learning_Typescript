

function identity<T>(arg:T)
: T
{

return arg;
}

console.log(identity(5)); // typescript infers T as number
console.log(identity("my name is abhisek anand")); // typerscript infers T as string.

