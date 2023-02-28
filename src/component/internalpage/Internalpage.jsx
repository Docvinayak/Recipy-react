import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardFooter , Image , Stack , Heading ,  Button  ,Text} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function Internalpage() {
  const [recipe, setRecipe] = useState({});
  const param = useParams();
  const APP_ID = "d29d40f6";
  const APP_KEY = "5b19a6bd355a2ff2a764d0059f30cf7b";

  useEffect(() => {
    getRecipe();
    console.log("hi")
  }, [param.title]);


  const getRecipe = () => {
    axios.get(
      `https://api.edamam.com/search?q=${param.title}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).then((response) => {
        setRecipe(response.data.hits[0])
        console.log(response.data.hits[0])
    })
  };

  return (
    <ChakraProvider>
     {recipe.recipe ?      
        <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        >
        <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={recipe.recipe.image}
            alt="Caffe Latte"
        />

        <Stack>
            <CardBody>
            <Heading size="md">{recipe.recipe.label}</Heading>

            <Text py="2">
            {recipe.recipe.ingredients.map((ingredient ,index) => (
          <li key={index}>{ingredient.text}</li>
         ))}
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant="solid" colorScheme="blue">
                Know More
            </Button>
            </CardFooter>
        </Stack>
        </Card>
    : <h1>Loading</h1>}
    </ChakraProvider>
  );
}

export default Internalpage;
