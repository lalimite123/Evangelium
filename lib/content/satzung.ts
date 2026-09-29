/**
 * Satzung des Vereins Das Evangelium e.V. — verbatim, German only (legally binding text).
 * Blocks: "p" = paragraph, "ol" = numbered list, "ul" = bullet list, "h" = sub-heading.
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ol'; items: string[] }
  | { type: 'ul'; items: string[] }

export type Section = { id: string; number: string; title: string; blocks: Block[] }

export const satzung: Section[] = [
  {
    id: 'p1',
    number: '§ 1',
    title: 'Name, Sitz und Geschäftsjahr',
    blocks: [
      {
        type: 'ol',
        items: [
          'Der Verein trägt den Namen: Das Evangelium und ist als Verein in das Vereinsregister des Amtsgerichts Dortmund einzutragen. Nach der Eintragung wird dem Namen der Zusatz „e.V.“ beigefügt.',
          'Sie hat ihren Sitz in Dortmund.',
          'Geschäftsjahr ist das Kalenderjahr.',
        ],
      },
    ],
  },
  {
    id: 'p2',
    number: '§ 2',
    title: 'Zweck des Vereins',
    blocks: [
      {
        type: 'ol',
        items: [
          'Grundlage allen Denkens und Handelns der Verein ist die Bibel. Die Aufgabe der Verein ist die Ausbreitung des vollen Evangeliums von Jesus Christus, den sie als Herrn und Erlöser der Welt bekennt.',
          'Missionarischer Arbeit im In- und Ausland zu motivieren und zu unterstützen. Der Verein ist bestrebt, im Rahmen ihrer Möglichkeiten auch tätig zu werden in praktischer Ausübung christlicher Nächstenliebe.',
          'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige und mildtätige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung. Der Verein ist selbstlos tätig; sie verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.',
          'Die Zwecke der Verein sind:',
        ],
      },
      {
        type: 'ul',
        items: [
          'Gemeinnützige Zwecke im Sinne des § 52 AO: Förderung der Religion; die Förderung der Erziehung, Volks- und Berufsbildung einschließlich der Studentenhilfe;',
          'Mildtätige Zwecke im Sinne des § 53 AO.',
        ],
      },
      { type: 'p', text: '5. Die Satzungszwecke werden verwirklicht insbesondere durch:' },
      { type: 'h', text: 'Im Bereich der Förderung der Religion:' },
      {
        type: 'ul',
        items: [
          'das Halten von öffentlichen Veranstaltungen (Gottesdienste, Vorträge und desgleichen) und die Verwendung von Druck- und Digitalmedien zur Vermittlung der christlichen Lehre;',
          'die Ausübung von Diensten zum seelischen Wohl der Menschen (Gebet, biblische Seelsorge und Lebensberatung und desgleichen);',
          'Durchführung von Maßnahmen der Kinder- und Jugendarbeit auf christlicher Grundlage.',
          'Freizeitmaßnahmen für Kinder (z.B. christliche Pfadfinderarbeit), Jugendliche und Senioren.',
          'Ehe- und Familientherapiegespräche bzw. entsprechende Veranstaltungen.',
          'Förderung und Durchführung von Maßnahmen der Innen- und Außenmission.',
          'Bau, Anmietung und Unterhaltung von Räumlichkeiten oder Gebäuden für die in dieser Satzung aufgeführten Zwecke der Verein.',
        ],
      },
      { type: 'h', text: 'Im Bereich Förderung der Erziehung, Volks- und Berufsbildung einschließlich der Studentenhilfe:' },
      {
        type: 'ul',
        items: [
          'Projekte, welche Sprachkurse für Jugendliche und Erwachsene anbieten, sowie Bildungsprojekte im Bereich der Allgemeinbildung als auch Berufsausbildung oder Fortbildung.',
        ],
      },
      { type: 'h', text: 'Im Bereich der mildtätigen Tätigkeiten und des Wohlfahrtswesens:' },
      {
        type: 'ul',
        items: [
          'Im Rahmen ihrer Möglichkeiten ist der Verein bestrebt, Personen, die die Voraussetzungen des § 53 Nr. 2 AO erfüllen, in Notfällen finanzielle Unterstützungen zu gewähren.',
          'Betreuung, Pflege und Hilfestellungen für Menschen, die aufgrund einer Erkrankung, ihres Alters oder in Notfällen auf die Unterstützung durch andere Personen angewiesen sind.',
        ],
      },
    ],
  },
  {
    id: 'p3',
    number: '§ 3',
    title: 'Mitgliedschaft',
    blocks: [
      {
        type: 'ol',
        items: [
          'Mitglied des Vereins kann werden, wer die Ziele des Vereins unterstützt und verbindlich an ihrer Verwirklichung mitarbeitet.',
          'Die Mitgliedschaft ist schriftlich oder mündlich beim Vorstand zu beantragen. Der Vorstand beschließt über diesen Antrag.',
          'Alle Mitglieder müssen einen jährlichen Beitrag leisten. Über die Höhe dieses Beitrags entscheidet die Mitgliederversammlung.',
          'Die Mitgliedschaft geht verloren durch:',
        ],
      },
      {
        type: 'ul',
        items: [
          'Austritt mit sofortiger Wirkung durch schriftliche Erklärung an dem Vorstand',
          'Tod',
          'Ausschluss',
          'Streichung durch den Vorstand wegen Desinteresse und Fernbleiben von dem Verein',
        ],
      },
      {
        type: 'p',
        text: '5. Ein Ausschluss kann aufgrund eines Vereines schädigenden Verhaltens oder eines nicht im biblisch christlichen Sinne geführten Lebenswandels durch den Vorstand erfolgen. Er ist dem betreffenden Mitglied schriftlich mitzuteilen und ist nicht anfechtbar.',
      },
      { type: 'p', text: '6. Über die Mitglieder wird ein Verzeichnis geführt.' },
    ],
  },
  {
    id: 'p4',
    number: '§ 4',
    title: 'Organe des Vereins',
    blocks: [
      { type: 'p', text: 'Der Verein ordnet ihre Angelegenheiten durch folgende Verein Organe:' },
      { type: 'ul', items: ['a) der Vorstand', 'b) die Mitgliederversammlung'] },
    ],
  },
  {
    id: 'p5',
    number: '§ 5',
    title: 'Mitgliederversammlung',
    blocks: [
      {
        type: 'p',
        text: 'In der Mitgliederversammlung hat jedes anwesende Mitglied − auch ein Ehrenmitglied − eine Stimme. Die Mitgliederversammlung ist insbesondere für folgende Angelegenheiten zuständig:',
      },
      {
        type: 'ul',
        items: [
          'a) Entgegennahme des Jahresberichtes des Vorstandes;',
          'b) Entlastung des Vorstandes;',
          'b) Entscheidet über die Höhe der Mitgliederbeiträge;',
          'c) Wahl und Abberufung der Mitglieder des Vorstandes;',
          'd) Beschlussfassung über die Änderung der Satzung und über die Auflösung des Vereins;',
          'e) Ernennung von Ehrenmitgliedern.',
        ],
      },
      {
        type: 'p',
        text: 'Sie findet jeweils nach Bedarf, jedoch mindestens einmal jährlich statt. Die Tagesordnung setzt der Vorstand fest. Jedes Vereinsmitglied kann bis spätestens eine Woche vor der Mitgliederversammlung beim Vorstand schriftlich eine Ergänzung der Tagesordnung beantragen. Über den Antrag entscheidet der Vorstand. Über Anträge zur Tagesordnung, die vom Vorstand nicht aufgenommen wurden oder die erstmals in der Mitgliederversammlung gestellt werden, entscheidet die Mitgliederversammlung mit der Mehrheit der Stimmen der anwesenden Mitglieder; dies gilt nicht für Anträge, die eine Änderung der Satzung, Änderungen der Mitgliedsbeiträge oder die Auflösung des Vereins zum Gegenstand haben.',
      },
      {
        type: 'p',
        text: 'Die Mitgliederversammlung wird vom Vorstand einberufen. Die Einberufung erfolgt schriftlich unter Einhaltung einer Frist von zwei Wochen und unter Angabe der Tagesordnung.',
      },
      {
        type: 'p',
        text: 'Außerordentliche Mitgliederversammlungen können jederzeit mit einer Frist von zwei Wochen unter Angabe der Tagesordnung schriftlich durch den Vorstand einberufen werden.',
      },
    ],
  },
  {
    id: 'p6',
    number: '§ 6',
    title: 'Der Vorstand',
    blocks: [
      { type: 'p', text: 'Der Vorstand besteht aus' },
      {
        type: 'ul',
        items: ['a) dem Vorsitzenden', 'b) dem stellvertretenden Vorsitzenden', 'c) Generalsekretär', 'd) dem Kassenwart'],
      },
      {
        type: 'p',
        text: 'Gesetzlicher Vorstand im Sinne des § 26 BGB sind der Vorsitzender und der stellvertretende Vorsitzender. Sie sind einzeln vertretungsbefugt.',
      },
      { type: 'p', text: 'Vorstandsmitglieder können nur Mitglieder des Vereins werden.' },
      {
        type: 'p',
        text: 'Für Rechtsgeschäfte über Grundvermögen und für die Bestellung oder Löschung von Hypotheken, Grundschulden und anderen dinglichen Rechten ist die gemeinsame Vertretung durch zwei Vorstandsmitglieder, darunter der Vorsitzende, erforderlich. Die Mitgliederversammlung kann bestimmen, dass sich mehrere Ämter in einer Person verbinden. Der Vorstand bleibt solange im Amt, bis eine Neubestellung erfolgt ist. Bei Wegfall eines Vorstandsmitgliedes bilden bis zur Neubestellung die übrigen Mitglieder den Vorstand. Bei Beendigung der Mitgliedschaft im Verein endet auch das Amt als Vorstand. Der Vorsitzende ist von den Beschränkungen des § 181 BGB nicht befreit. Der Vorsitzende übt seine Funktionen im Sinne der Satzung und der Beschlüsse der Mitgliederversammlung aus. Er ist für eine ordentliche, rechtmäßige Haushaltsführung des Vereins verantwortlich.',
      },
      {
        type: 'p',
        text: 'Von dem Vorstand gehen die entscheidenden geistlichen Impulse aus. Er ist verantwortlich für die geistliche Ausrichtung der Verein Arbeit, der Planung und Koordination der Verein Tätigkeiten sowie für alle Verwaltungsaufgaben.',
      },
      {
        type: 'p',
        text: 'Die einzelnen Mitglieder der Vorstand übernehmen die Verantwortung über einzelne Arbeitszweige und Aktivitäten der Verein oder delegieren diese in die Obhut an berufene Mitarbeiter. In die Zuständigkeit der Vorstand fällt die Abberufung angestellten Mitarbeitern. Bei Kündigung eines Vorstandsmitgliedes hat die Mitgliederversammlung das Recht, nach Zugang der schriftlichen Kündigung bei dem gekündigten Vorstandsmitglied durch einfache Mehrheit innerhalb von drei Wochen die Kündigung des Vorstandsmitgliedes in einer außerordentlichen Mitgliederversammlung zu widerrufen.',
      },
    ],
  },
  {
    id: 'p7',
    number: '§ 7',
    title: 'Beratung und Beschlussfassung des Vorstands',
    blocks: [
      {
        type: 'ol',
        items: [
          'Der Vorstand tritt nach Bedarf zusammen. Die Sitzungen werden vom Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter, einberufen. Eine Einberufungsfrist von einer Woche soll eingehalten werden. Vorstand ist beschlussfähig, wenn mehr als die Hälfte ihrer Mitglieder anwesend sind. Bei der Beschlussfassung entscheidet die Mehrheit der abgegebenen gültigen Stimmen. Bei Stimmengleichheit entscheidet die Stimme des Vorsitzenden, bei dessen Verhinderung die seines Stellvertreters.',
          'Die Beschlüsse des Vorstands sind zu protokollieren. Das Protokoll ist vom Protokollführer sowie vom Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter oder einem anderen Mitglied des Vorstands zu unterschreiben.',
        ],
      },
    ],
  },
  {
    id: 'p8',
    number: '§ 8',
    title: 'Beschlussfassung der Mitgliederversammlung',
    blocks: [
      {
        type: 'ol',
        items: [
          'Die Mitgliederversammlung wird vom Vorsitzenden des Vorstands, bei dessen Verhinderung von seinem Stellvertreter und bei dessen Verhinderung von einem durch die Mitgliederversammlung zu wählenden Versammlungsleiter geleitet.',
          'Die Mitgliederversammlung ist beschlussfähig, wenn mindestens ein Drittel aller Vereinsmitglieder anwesend ist. Bei Beschlussunfähigkeit ist der Vorstand verpflichtet, innerhalb von vier Wochen eine zweite Mitgliederversammlung mit der gleichen Tagesordnung einzuberufen. Diese ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig. Hierauf ist in der Einladung hinzuweisen.',
          'Die Mitgliederversammlung beschließt in offener Abstimmung mit der Mehrheit der Stimmen der anwesenden Mitglieder. Kann bei Wahlen kein Kandidat die Mehrheit der Stimmen der anwesenden Mitglieder auf sich vereinen, ist gewählt, wer die Mehrheit der abgegebenen gültigen Stimmen erhalten hat; zwischen mehreren Kandidaten ist eine Stichwahl durchzuführen. Beschlüsse über eine Änderung der Satzung bedürfen der Mehrheit von zwei Vierteln, der Beschluss über die Änderung des Zwecks oder die Auflösung des Vereins der Zustimmung von neun Zehnteln der anwesenden Mitglieder.',
          'Über den Ablauf der Mitgliederversammlung und die gefassten Beschlüsse ist ein Protokoll zu fertigen, das vom Protokollführer und vom Versammlungsleiter zu unterschreiben ist.',
        ],
      },
    ],
  },
  {
    id: 'p9',
    number: '§ 9',
    title: 'Haushalt',
    blocks: [
      {
        type: 'ol',
        items: [
          'Über die Einnahmen und Ausgaben der Verein ist unter der Verantwortung des Kassenwarts ordnungsgemäße Rechnungslegung vorzunehmen.',
          'Das Haushaltsjahr entspricht dem Kalenderjahr.',
          'Die zur Erfüllung der satzungsgemäßen Aufgaben benötigten Mittel werden durch Mitgliedsbeiträge, freiwillige Spenden und Kollekten der Mitglieder und Freunde der Verein aufgebracht.',
          'Mittel der Verein dürfen nur für die satzungsmäßigen Zwecke verwendet werden.',
          'Es darf keine Person durch Ausgaben, die dem Zweck der Verein fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.',
          'Die Gewährung angemessener Vergütungen für Dienstleistungen aufgrund eines besonderen Vertrages bleibt unberührt.',
          'Soweit Mitglieder oder sonstige Personen ehrenamtlich für der Verein tätig sind, erhalten sie Erstattung der nachgewiesenen angemessenen Auslagen.',
          'Die Vergütung oder Honorierung der Mitglieder der Vorstand wird ausdrücklich zugelassen. Dazu gehört insbesondere auch die Zahlung von pauschalem Aufwandsersatz und von Aufwandsentschädigungen im Sinne des § 3 Nr. 26 a EStG.',
        ],
      },
    ],
  },
  {
    id: 'p10',
    number: '§ 10',
    title: 'Auflösung und Anfallberechtigung',
    blocks: [
      {
        type: 'p',
        text: 'Bei Auflösung oder Aufhebung der Verein oder bei Wegfall der steuerbegünstigten Zwecke fällt das Vermögen dem Hilfswerk der evangelischen Landeskirchen und Freikirchen in Deutschland für die weltweite Entwicklungszusammenarbeit Brot für die Welt, der es unmittelbar und ausschließlich für gemeinnützige, mildtätige oder kirchliche Zwecke zu verwenden hat. Als Liquidatoren werden die im Amt befindlichen vertretungsberechtigten Vorstandsmitglieder bestimmt, soweit die Mitgliederversammlung nichts anderes abschließend beschließt. Sie werden von der Mitgliederversammlung gewählt.',
      },
    ],
  },
]
