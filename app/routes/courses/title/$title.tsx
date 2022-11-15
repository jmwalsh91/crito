import { Card, Title, Text } from '@mantine/core'
import { useParams } from '@remix-run/react'
import React from 'react'

type Props = {}

function Index({}: Props) {
    const { title } = useParams()
  return (
    <div>
        <Card 
        sx={{
            position: "absolute",
            zIndex: 1000,
            width: '80vw',
            height: '70vh',
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
            margin: '0 auto',
        }}>
            <Title>{title}</Title>
            <Text>This is a test.</Text>

        </Card>
    </div>
  )
}

export default Index