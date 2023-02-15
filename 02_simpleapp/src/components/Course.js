import React from "react";

import{
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course = () => {
 return  ( <Card>
        <CardBody className="text-center">
            <CardSubtitle className="font-weight-bold">
                    Java Course
            </CardSubtitle>
            <CardText>
                    It is java course for begginner
            </CardText>
            <Container className="text-center">
                <Button color="danger">Delete</Button>
                <Button color="warning ml-3">Updare</Button>
            </Container>
        </CardBody>
    </Card>
   )
}

export default Course;