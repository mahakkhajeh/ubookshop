
export const Block = props => {

    if (!props.state.cart) {
        props.state.cart = []
    }


    let size = props.state.cart.includes(props.book.title) ? 20 : 25

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative", backgroundColor: "thistle",
        borderRadius: 5, margin: "10px", boxShadow: "22px 34px 104px 4px rgba(242,196,242,0.66)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{
                width: "100%",
                height: 200,
                objectFit: "fill",
                minWidth: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />

        <f-cc style={{
            padding: "5px 8px", width: "100%", height: 40
            , direction: "ltr"
        }}>
            <f-12>{props.book.title}</f-12>
        </f-cc>
        <hr style={{ width: "80%", opacity: 0.2 }} />
        <f-csb style={{ width: "100%", padding: "5px 0" }}>

            <img src={props.state.cart.includes(props.book.title) ?
                "https://irmapserver.ir/research/42/icons8-tick-24.png" :
                "https://irmapserver.ir/research/42/icons8-cart-64.png"}

                style={{
                    height: size, width: size, objectFit: "contain",
                    margin: "0 10px"
                }} />


            <c-x style={{ direction: "ltr", margin: "0 10px", color: "red" }}>
                <f-13b> <del>{(props.book.price as number).toLocaleString("fa-IR")} تومان</del> </f-13b>
                <f-13b
                    style={{ color: "blue", direction: "ltr", margin: " 0 10px" }}>
                    {(props.book.price).toLocaleString("fa-IR")}تومان
                </f-13b>

            </c-x>
        </f-csb>


    </c-c>
}
