export default function CreateUserProfile({ name }) {
  return (
    <>
      <div className="welcome">
        <h1>Привіт, {name}!</h1>
        <p>Ми раді, що ти обрав наш сервіс!</p>
      </div>

      <div className="registration-by-service">
        <h2>Напиши про себе, щоб інші дізнались про тебе</h2>

        <form className="registration-by-service_form">
          <label>
            Фото профілю:
            <input type="file" name="user-photo" accept="image/*" />
          </label>

          <label>
            Ім’я:
            <input
              type="text"
              name="username"
              required
              placeholder="Ваше ім'я"
            />
          </label>

          <label>
            Про себе:
            <input
              type="text"
              name="about-user"
              placeholder="Напишіть про себе!"
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Завершити реєстрацію
          </button>
        </form>
      </div>
    </>
  );
}
