export default function RegistrationInBondee({ name }) {
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

          <label>
            Ваша стать:
            <select name="gender" required>
              <option value="">Оберіть стать</option>
              <option value="woman">Жінка</option>
              <option value="man">Чоловік</option>
              <option value="undefined">Не вказувати</option>
            </select>
          </label>

          <label>
            Ваше місто:
            <select name="city" required>
              <option value="">Оберіть місто</option>
              <option value="Chernigov">Чернігів</option>
              <option value="Kyiv">Київ</option>
              <option value="Kharkiv">Харків</option>
              <option value="Poltava">Полтава</option>
              <option value="Sumy">Суми</option>
            </select>
          </label>

          <button type="submit" className="btn btn-primary">
            Завершити реєстрацію
          </button>
        </form>
      </div>
    </>
  );
}
