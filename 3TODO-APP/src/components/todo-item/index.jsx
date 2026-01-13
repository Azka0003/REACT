import { Card, Button, CardContent, Typography, CardActions } from "@mui/material";

export default function TodoItem({ todo, fetchDetailsCurrentTodo }) {
    console.log(todo);

    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <CardContent>
                <Typography
                    variant="h5" color={'text.secondary'}
                > {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => fetchDetailsCurrentTodo(todo?.id)}
                    sx={{
                        backgroundColor: "#000000",
                        color: "#fff",
                        opacity: "0.75",
                        "&:hover": {
                            backgroundColor: "#000000",
                            color: "#fff",
                            opacity: "1",
                        },
                    }}
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}

// sx receive any normal css