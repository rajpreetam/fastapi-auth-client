import Layout from "@/components/hocs/Layout";
import LoginFormElement from "@/components/LoginFormElement";

const LoginPage = () => {
    return (
        <Layout includeNav={false}>
            <div className='container h-screen fr-ic-jc'>
                <div className='card w-full max-w-lg mx-auto fc-sy-6 py-4'>
                    <h3>Login</h3>
                    <LoginFormElement />
                </div>
            </div>
        </Layout>
    );
}

export default LoginPage;
