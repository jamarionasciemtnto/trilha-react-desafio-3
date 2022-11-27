import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Column, Title, Wrapper, TitleCreateAccount, SubtitleCreateAccount, Warning, AlreadySignIn, LogInText, Row } from './styles';

const CreateAccount = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const handleRedirectToLogin = () => {
        navigate('/login')
    }

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/login') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
            alert('Houve um erro ao processar sua requisição. Tente novamente mais tarde.')
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCreateAccount>Começe agora grátis</TitleCreateAccount>
                <SubtitleCreateAccount>Crie sua conta e make the change._</SubtitleCreateAccount>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="fullName"  control={control} />
                    {errors.fullName && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Warning>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e 
                 os Termos de Uso da DIO.</Warning>
                <Row onClick={handleRedirectToLogin}>
                    <AlreadySignIn>Já tenho conta.</AlreadySignIn>
                    <LogInText>Fazer login</LogInText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { CreateAccount }