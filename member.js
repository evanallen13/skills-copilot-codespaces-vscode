function skillsMember() {
  const member = document.querySelectorAll('.member');
  const memberSkills = document.querySelectorAll('.member__skills');

  member.forEach((item, index) => {
    item.addEventListener('click', () => {
      memberSkills[index].classList.toggle('member__skills--active');
    });
  });
}