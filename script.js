var a = Number(prompt("Masukkan Angka pertama!"));

var b = Number(prompt("Masukkan Angka kedua!"));

var c = prompt("Masukkan operator!");

if (c == "+")
{
    document.write(a+b);
}

else if (c == "-")
{
    document.write(a-b);
}

else if (c == "x")
{
    document.write(a*b);
}

else if (c == "*")
{
    document.write(a*b);
}

else if (c == ":")
{
    document.write(a/b);
}

else if (c == "/")
{
    document.write(a/b)
}

else
{
    document.write("Nothing")
}
