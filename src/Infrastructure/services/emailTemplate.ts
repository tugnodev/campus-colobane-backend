export const emailTemplate = (username: string, email: string, verifyUrl:string) => {
  return `<div
  style='background-color:rgb(243,244,246);font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";padding-top:40px;padding-bottom:40px'>
  <table
    align="center"
    width="100%"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color:rgb(255,255,255);border-radius:8px;padding:40px 32px;max-width:600px;margin:auto">
    <tbody>
      <tr>
        <td>
          <!-- Message -->
          <h1 style="font-size:24px;font-weight:700;color:rgb(17,24,39);margin-bottom:16px">
            Vérifiez votre adresse email
          </h1>
          <p style="font-size:16px;color:rgb(55,65,81);margin:16px 0;line-height:24px">
            Bonjour ${username},
          </p>
          <p style="font-size:16px;color:rgb(55,65,81);margin:16px 0;line-height:24px">
            Merci de vous être inscrit sur Campus Colobane ! Pour finaliser la création de votre compte et commencer vos achats, veuillez vérifier votre adresse email en cliquant sur le bouton ci-dessous.
          </p>
          <p style="font-size:14px;color:rgb(75,85,99);margin:16px 0 24px 0;line-height:24px">
            Adresse email : <strong>${email}</strong>
          </p>

          <!-- Bouton -->
          <div style="text-align:center;margin-bottom:32px">
            <a
              href={${verifyUrl}}
              style="background-color:rgb(37,99,235);color:#fff;padding:16px 32px;border-radius:8px;font-size:16px;font-weight:600;text-decoration:none;display:inline-block"
              target="_blank">
              Vérifier mon email
            </a>
          </div>

          <!-- Lien alternatif -->
          <p style="font-size:14px;color:rgb(75,85,99);line-height:20px;margin:16px 0">
            Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :
          </p>
          <p style="font-size:14px;color:rgb(37,99,235);word-break:break-all;line-height:24px;margin:16px 0">
            {verifyUrl}
          </p>

          <!-- Note sécurité -->
          <div style="background-color:rgb(249,250,251);padding:16px;border-radius:8px;margin-bottom:32px">
            <p style="font-size:14px;color:rgb(55,65,81);margin:0;line-height:20px">
              <strong>Note de sécurité :</strong> Ce lien de vérification expire dans 24 heures. Si vous n'avez pas créé de compte sur Campus Colobane, ignorez cet email.
            </p>
          </div>

          <!-- Footer -->
          <div style="border-top:1px solid rgb(229,231,235);padding-top:24px;text-align:center">
            <p style="font-size:12px;color:rgb(107,114,128);margin:0 0 8px 0;line-height:24px">
              Campus Colobane - Votre marketplace de confiance
            </p>
            <p style="font-size:12px;color:rgb(107,114,128);margin:0 0 8px 0;line-height:24px">
              Colobane, Dakar, Sénégal
            </p>
            <p style="font-size:12px;color:rgb(107,114,128);margin:0;line-height:24px">
              © 2025 Campus Colobane. Tous droits réservés.
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`
}