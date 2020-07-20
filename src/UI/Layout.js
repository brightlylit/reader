import React from 'react';
import {Grid, Col, Row} from './ExampleStyledComponent'
import '../App.css'


const layout = ( props ) => {
    return (
        <Grid>
            <Row>
                <Col className="colclass" size={0.5}>
                    <div>
                        div 1
                    </div>
                </Col>
                <Col size={2}>
                    <div>
                        { props.children }
                    </div>
                </Col>
                <Col className="colclass" size={0.5}>
                   <div>
                       div 3
                   </div>
                </Col>
            </Row>  
        </Grid>
    )
}

export default layout;