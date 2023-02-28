const MyComponents = {
    Comp1: function Comp1(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    },
    Comp2: function Comp2(props) {
        return <div>This is comp 2</div>
    }
}

function ObjectComp() {
    return (
        <>
            <MyComponents.Comp1 color="red" />
            <MyComponents.Comp2 />
        </>
    )
}

export default ObjectComp;