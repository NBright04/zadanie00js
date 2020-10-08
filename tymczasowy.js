const number = prompt("Podaj zwierzaka");

switch (number) {
    case "pies":
        document.write("Psy są najlepsze");
        break;
    case "kot":
        document.write("Koty są lepsze od psów");
        break;
    case "chomik":
        document.write("Każdy chomik jest super");
        break;
    case "świnka":
        document.write("Świnki są fajowe");
        break;
    default:
        document.write("Jakiś dziwny ten zwierzak");
}