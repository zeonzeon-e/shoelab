import React from "react";
import "../css/reset.css";

import { Box } from "@chakra-ui/react";

function Main(){
    return(
        <div>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
  Button
</Box>
            
        </div>
    )
}

export default Main;