export default function HelloWorld(){

    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
             <img src="public/img/cat.png" alt="logo react" width={750}/>
            <p>Selamat belajar ReactJs</p>

            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Tiara"
                nim="2457301146"
                tanggal="2026/03/10"
            />
            <UserCard
                nama="Adudu"
                nim="123"
                tanggal="2026/03/10"
            />
             <UserCard {...propsUserCard}/>

        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small ClassName="card"> 
        Salam dari binjai👌 
        </small>
    )
}

function UserCard(props){
    return (
        <div >
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

