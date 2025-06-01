const Contact = () =>{
    return (
        <div className="font-bold text-2xl p-4 m-4">
            <h1>Contact US for any queries</h1>
            <form>
                <input
                type="text"
                placeholder="Name..."
                className="border border-black p-2 m-2"
                />
                <input
                type="text"
                placeholder="Description..." 
                className="border border-black p-2 m-2"
                />
                <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg"> 
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;