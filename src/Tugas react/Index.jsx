import React from "react";
import ClassComponent from "./TugasKomponen/ClassComponent";
import KomponenProp from "./TugasKomponen/KomponenProp";


export default class TugasKomponen extends React.Component {

    render() {
        return(
            <div>
                <ClassComponent nama="Kadek Sucipta"/>
                <KomponenProp nama="Rafly Fhariz" />
            </div>
        )
    }
}