import { Card, Title, Text, Stack } from '@mantine/core'
import React from 'react'

type Props = {
    image: string,
    title: string,
}

function Board({image, title}: Props) {
  return (
    <Stack justify="center" align="center">

    <Card sx={{
        margin: "0 auto",
        marginTop: "5 rem",
        height: "30rem",
        width: "12rem",
        borderRadius: "10rem",
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
    }}>
        <Title>Thing</Title>
        <Card.Section>
      <Text>
        This thing.
      </Text>
        </Card.Section>
  
      </Card>
      <Text size="xl" weight={700}> {title}</Text>
          </Stack>
  )
}

export default Board