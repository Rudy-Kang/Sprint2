function check(form)
{
    if(form.userid.value=="Rudy")
    {
        if(form.userpassword.value=="1234")
        {
            window.open('welcomepage.html')
        }
        else
        {
            alert("Wrong Password");
        }
    }
    else
    {
        alert("Wrong UserID");
    }
}
