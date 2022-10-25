import React, { useState } from 'react';
import { Button, Card, Alert, Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./firebase";


export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/login");

        }catch {
            setError("Failed to log out");
        }
    }

  return (
    <>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className='w-100' style={{maxWidth : "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to="/home" className="btn btn-primary w-100 mt-3">Go to Twitter</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </div>
        </div>
    </Container>
    </>
  )
}
