import { Card, CardHeader, CardBody, CardFooter , Image , Stack , Heading , Divider , Button ,ButtonGroup ,Text} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import { useNavigate } from 'react-router-dom';



function Recipe({ index, title, calories, image, ingredients ,handleAddProduct ,incart}) {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              onClick={() => navigate(`internalpage/${title}`)}
            >
              {title}
            </Heading>
            <Text>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {calories}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {/* <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button> */}
            {incart ? (
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() =>
                  handleAddProduct({ title, calories, image, ingredients })
                }
              >
                Remove from Wishlist
              </Button>
            ) : (
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() =>
                  handleAddProduct({ title, calories, image, ingredients })
                }
              >
                Add to Wishlist
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </ChakraProvider>
  );
}

export default Recipe


// const Recipe = ({ index, title, calories, image, ingredients ,handleAddProduct }) => {
//   return (
// //     <div key={index} >
// //       <p>{title}</p>
// //       <p>{calories}</p>
// //       <img src={image} alt='' />
// //       <ol >
// //         {ingredients.map((ingredient ,index) => (
// //           <li key={index}>{ingredient.text}</li>
// //         ))}
// //       </ol>
// //     </div>
// //   );
// // };
//     <ChakraProvider>
//      <Card maxW='sm'>
//   <CardBody>
//     <Image
//       src={image}
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>{title}</Heading>
//       <Text>
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='2xl'>
//         {calories}
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
//       {/* <Button variant='solid' colorScheme='blue'>
//         Buy now
//       </Button> */}
//       <Button variant='ghost' colorScheme='blue' >
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>
// </ChakraProvider>
//   )
// }

// export default Recipe;