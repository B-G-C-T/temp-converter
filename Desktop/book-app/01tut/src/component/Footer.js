const Footer =() =>{
    const today = new Date();

return(
    <footer style={{
        color:"black",
            textAlign:"center",
            paddingTop: '100%',
            
            
    }}>
        <p>Copyright &copy;{today.getFullYear()}</p>
    </footer>
)

}
export default Footer