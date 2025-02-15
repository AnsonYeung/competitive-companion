# Changelog

## 2.22.0 - March 30th, 2021
- Added a parser for CodeDrills

## 2.21.2 - March 28th, 2021
- Fixed the parsing of Google Coding Competitions sample cases so the full text is downloaded when necessary

## 2.21.1 - March 21st, 2021
- Fixed the parsing of Luogu sample cases containing whitespace at the beginning
- Fixed the parsing of Google Coding Competitions sample cases in problems since 2021
- Fixed the parsing of HackerEarth sample cases in contest problems

## 2.21.0 - March 14th, 2021
- Added a "batch" property to the output format, which makes it easier to know when an entire contest has been sent

## 2.20.0 - March 8th, 2021
- Added a configurable option for the timeout of the requests sent to ports on which tools might be listening
- Fixed the memory limit parsing in the Yandex parser (thanks [@mfornet](https://github.com/mfornet))
- Fixed the parsing of Codeforces sample cases containing ampersands
- Fixed the Aizu Online Judge parser

## 2.19.9 - February 26th, 2021
- Fixed the HackerEarth and the Toph parser

## 2.19.8 - February 7th, 2021
- Improved the parsing of sample cases in the SPOJ and the CodeChef parser

## 2.19.7 - January 28th, 2021
- Fixed the omegaUp parser

## 2.19.6 - January 8th, 2021
- Fixed the LightOJ problem parser to make it work with the new website
- Removed the LightOJ contest parser because the new version of LightOJ doesn't support contests at the moment

## 2.19.5 - December 31st, 2020
- Fixed the parsing of sample cases of certain problems in the SPOJ parser

## 2.19.4 - December 22nd, 2020
- Fixed the input/output format parsing in the USACO parser to accommodate the stdin/stdout input/output introduced in the December 2020 contest
- Fixed the parsing of sample cases in the USACO parser in case there are multiple sample cases
- Fixed the parsing of certain acm.sgu.ru problems in the Codeforces parser
- Fixed the Library Checker parser

## 2.19.3 - December 14th, 2020
- Improved the UVa Online Judge parser so that it works with the PDFs hosted on [https://onlinejudge.org/external](https://onlinejudge.org/external) and [https://icpcarchive.ecs.baylor.edu/external](https://icpcarchive.ecs.baylor.edu/external) (not available on Firefox due to browser limitations)
- Fixed the category parsing in the Facebook Coding Competitions parser (again)

## 2.19.2 - December 13th, 2020
- Fixed the parsing of sample cases in contest problems in the Virtual Judge parser
- Fixed the category parsing in the Facebook Coding Competitions parser

## 2.19.1 - December 11th, 2020
- Fixed the parsing of sample cases in the CSES parser (thanks [@anandoza](https://github.com/anandoza))

## 2.19.0 - November 28th, 2020
- Added support for TLX (thanks [@anandoza](https://github.com/anandoza))
- Fixed the parsing of problems and contests in the LibreOJ parsers
- Fixed the parsing of problems in the Library Checker parser

## 2.18.3 - October 18th, 2020
- Fixed the parsing of interactive problems in the USACO parser
- Fixed the parsing of sample cases in the omegaUp parser (again)

## 2.18.2 - October 17th, 2020
- Fixed the category parsing in the HackerRank contest parser in custom contests (thanks [@fcottet](https://github.com/fcottet))
- Fixed the category parsing in the HackerRank problem parser
- Fixed the parsing of public HackerRank contests
- Fixed the parsing of sample cases in the omegaUp parser

## 2.18.1 - August 27th, 2020
- Removed the time and memory limit parsing from the MSK Informatics parser now that their problems no longer show these constraints

## 2.18.0 - August 12th, 2020
- Added a parser for the non-beta version of Aizu Online Judge
- Re-added the regex input option for the Facebook Coding Competitions parser
- Fixed the parsing of titles in the AtCoder parser
- Fixed the time and memory limit parsing in the DMOJ parser when using DMOJ in a language other than English
- Fixed the time limit parsing in the Codeforces parser for problems in contests using a time limits scaling policy

## 2.17.4 - August 2nd, 2020
- Fixed the Codeforces contest parser to work with the m1, m2 and m3 subdomains

## 2.17.3 - July 28th, 2020
- Fixed the parsing of sample testcases in the Facebook Coding Competitions parser
- Changed the input file name to a pattern in the Facebook Coding Competitions parser to make it work with validation and sample input files

## 2.17.2 - July 20th, 2020
- Replaced the Facebook Hacker Cup parser with a Facebook Coding Competitions parser 
- Fixed the time and memory limit parsing in the omegaUp parser
- Added support for cpbooster

## 2.17.1 - July 3rd, 2020
- Fixed the USACO Training parser so that the Java main class name is set to the id of the task
- Fixed the DMOJ parser so that problem titles for attempted problems are parsed correctly (thanks [@plasmatic1](https://github.com/plasmatic1))
- Fixed the parsing of sample testcases in the UVa parser
- Fixed the parsing of titles in the yukicoder parser

## 2.17.0 - June 4th, 2020
- Added custom rules to the settings. When a rule's regular expression matches with the url of the problem that is being parsed, the parser configured in that rule is used instead of the default parser.
- Contest parsers now fetch contest problems in parallel, greatly decreasing the time it takes to parse large contests (thanks [@mfornet](https://github.com/mfornet))
- Fixed the Codeforces contest parser for contests which provide problem statements in PDF(s) (thanks [@mfornet](https://github.com/mfornet))
- Fixed the Toph parser so that it also runs on contest problems (thanks [@EgorKulikov](https://github.com/EgorKulikov))

## 2.16.1 - May 25th, 2020
- Fixed the Yandex parser so that it works on yandex.ru/contest problems (thanks [@JVMusin](https://github.com/JVMusin))
- Fixed the categorization in the HackerEarth parser
- Fixed the URI Online Judge parser so that it works with the new problem pages

## 2.16.0 - May 11th, 2020
- Added parsers for Aizu Online Judge, Anarchy Golf, Library Checker and yukicoder
- Removed the old Google Code Jam parser now that Google has taken it down and is moving everything to the Google Coding Competitions platform
- Improved the time and memory limit parsing in the UOJ parser
- Fixed the Codeforces parser for the m1, m2 and m3 subdomains
- Fixed the Codeforces parser for certain acm.sgu.ru problems (thanks [@JVMusin](https://github.com/JVMusin))

## 2.15.4 - May 5th, 2020
- Added Russian language support to the Timus parser (thanks [@JVMusin](https://github.com/JVMusin))

## 2.15.3 - April 22nd, 2020
- Added support for multiple test cases to the Google Coding Competitions parser (thanks [@adambenali](https://github.com/adambenali))

## 2.15.2 - April 20th, 2020
- Fixed parsing acm.sgu.ru problems in the Codeforces parser (thanks [@JVMusin](https://github.com/JVMusin))
- Added support for multiple test cases to the SPOJ parser (thanks [@JVMusin](https://github.com/JVMusin))
- Fixed parsing time limits in the Toph parser (thanks [@JVMusin](https://github.com/JVMusin))

## 2.15.1 - April 17th, 2020
- Fixed parsing time and memory limits in the Codeforces parser

## 2.15.0 - April 10th, 2020
- Made the format of the "group" key in the extracted problem data consistent across parsers
- Added a parser for mrJudge
- Added support for educational courses on Codeforces (thanks [@JVMusin](https://github.com/JVMusin))
- Fixed the Luogu, Codeforces and CodeChef parsers
- Removed the A2OJ parser

## 2.14.0 - April 6th, 2020
- Changed the way the extension loads its scripts so that it needs less permissions. This also fixes the Google Coding Competitions parser which previously only worked when the problem page was refreshed before parsing.
- Added a "Parse with" context menu item to the plus icon which can be used to parse any page with any parser
- Added support for the codeforc.es mirror to the Codeforces parsers

## 2.13.0 - March 22nd, 2020
- Added parsers for CSES, SSOIER and UOJ
- Fixed the Virtual Judge and the COJ parser
- Added support for the codeforces.ml mirror to the Codeforces parsers

## 2.12.0 - January 31st, 2020
- Added a parser for NowCoder (thanks [@landcold7](https://github.com/landcold7))
- Added support for CP Editor

## 2.11.0 - January 17th, 2020
- Added a contest parser for LibreOJ
- Fixed the LibreOJ problem parser so that it works on contest problems as well
- Fixed a typo in the Luogu problem parser
- Added support for Competitive Programming Helper

## 2.10.0 - January 4th, 2020
- Updated the urls Competitive Companion runs on, it no longer runs on all urls but only on the urls that it has a parser for
- Added a parser for Luogu and LibreOJ
- Fixed the UVa Online Judge parser

## 2.9.2 - December 16th, 2019
- Fixed the AtCoder and the Timus Online Judge parser (thanks [@champon1020](https://github.com/champon1020) for the AtCoder fix)

## 2.9.1 - November 12th, 2019
- Added the activeTab permission so the extension only has access to a tab when the extension is invoked by clicking the page action

## 2.9.0 - November 12th, 2019
- Added support for CodeMarshal (thanks [@NAbdulla1](https://github.com/NAbdulla1))

## 2.8.5 - September 23rd, 2019
- Added support for problems and contests hosted on *.codeforces.com subdomains

## 2.8.4 - September 19th, 2019
- Fixed the Toph parser

## 2.8.3 - July 2nd, 2019
- Fixed the HackerEarth CodeArena parser

## 2.8.2 - June 27th, 2019
- Fixed the AtCoder parser (thanks [@tatsumack](https://github.com/tatsumack))
- Added support for Caide

## 2.8.1 - June 13rd, 2019
- Fixed the Facebook Hacker Cup parser (thanks [@adambenali](https://github.com/adambenali))
- Reverted the performance improvement from 2.8.0 on the class that sends problem data to CHelper and JHelper

## 2.8.0 - June 1st, 2019
- Fixed the COJ parser and the Toph parser (thanks [@mfornet](https://github.com/mfornet) for the COJ fix)
- Added support for acmX (thanks [@mfornet](https://github.com/mfornet))
- Updated the way problem data is sent to tools so it doesn't stop half-way when sending large contests and to improve performance with sending problem data to CHelper and JHelper

## 2.7.3 - May 18th, 2019
- Fixed the USACO Training parser

## 2.7.2 - May 13rd, 2019
- Fixed the USACO Training parser

## 2.7.1 - May 7th, 2019
- Fixed the HackerEarth parser

## 2.7.0 - April 28th, 2019
- Added parsers for Baekjoon Online Judge
- Fixed the CodeChef and the new Google Code Jam parser (thanks [@andrewduffy](https://github.com/andrewduffey) for the Google Code Jam fix)
- Added support for Google Kick Start (thanks [@Ziklon](https://github.com/Ziklon))

## 2.6.1 - March 22nd, 2019
- Fixed the Codeforces and the new Google Code Jam parser

## 2.6.0 - February 3rd, 2019
- Added a parser for Bloomberg CodeCon (thanks [@kessido](https://github.com/kessido))

## 2.5.2 - January 23rd, 2019
- Improved the Virtual Judge parser

## 2.5.1 - January 21st, 2019
- Fixed the CodeChef parser

## 2.5.0 - December 24th, 2018
- Added a parser for Virtual Judge
- Fixed bugs in the ACMP, ECNU Online Judge, UVa Online Judge, ICPC Live Archive and AtCoder parsers (thanks [@m1kit](https://github.com/m1kit) for the AtCoder fix)
- Added "interactive" to the output format which specifies whether the problem is interactive or not
- Removed the regex input option

## 2.4.3 - December 14th, 2018
- Fixed bugs in the ACMP and the Toph parsers

## 2.4.2 - December 4th, 2018
- Fixed bugs in the Yandex, Panda Online Judge, ECNU Online Judge, Toph and Codeforces parsers
- Removed the MultiEOF test type because it wasn't being used by any parser

## 2.4.1 - October 29th, 2018
- Fixed the Codeforces parser when browsing the Russian version of Codeforces (thanks [@AlexeyDmitriev](https://github.com/AlexeyDmitriev))
- Made the extension compliant with Chrome Web Store's new requirements by disabling minimization of it's source code

## 2.4.0 - October 26th, 2018
- Added parsers for ACMP and MSK Informatics
- Fixed the Codeforces parser and the Panda Online Judge parser

## 2.3.2 - September 15th, 2018
- Fixed a bug in the UVa Online Judge and the ICPC Live Archive parsers

## 2.3.1 - September 14th, 2018
- Fixed bugs in the HackerRank, ECNU Online Judge, QDUOJ and NYTD Online Judge parsers
- Removed the SUSTech Online Judge parser

## 2.3.0 - September 9th, 2018
- Fixed bugs in the HackerRank, URI Online Judge and Codeforces parsers
- Added parsers for UVa Online Judge, ICPC Live Archive, FZU Online Judge, CSU-ACM Online Judge, Hrbust Online Judge, HIT Online Judge, hihoCoder, ECNU Online Judge, SUSTech Online Judge, QDUOJ and NYTD Online Judge

## 2.2.4 - June 30th, 2018
- Added support for AtCoder Beta

## 2.2.3 - June 27th, 2018
- Fixed a bug in the DMOJ parser

## 2.2.2 - June 19th, 2018
- Fixed the CodeChef parser

## 2.2.1 - June 18th, 2018
- Added a shortcut (default: Ctrl+Shift+U) to parse the problem/contest without having to click the green plus icon

## 2.2.0 - June 18th, 2018
- Added parsers for A2OJ, HDU Online Judge, Toph, PEG Judge, POJ, omegaUp and COJ
- Fixed the HackerRank and the SPOJ parsers

## 2.1.1 - June 2nd, 2018
- Switched the CHelper implementation to send all tasks to the JSONParser, instead of disguising them as Kattis tasks

## 2.1.0 - May 29th, 2018
- Fixed bugs in the HackerRank, CodeChef, Codeforces, DevSkill, LightOJ, Timus and URI Online Judge parsers
- Added tests for nearly all parsers
- Cyrillic characters are now removed from Java class names

## 2.0.1 - May 8th, 2018
- Fixed the HackerRank parser
- Added support for Mind Sport

## 2.0.0 - May 6th, 2018
- Renamed CHelper Companion to Competitive Companion
- Moved all parsers over to a TypeScript implementation
- Tasks can now be sent in a universal JSON format, making it possible to support more than just CHelper
- Added the option to specify custom ports which makes it possible to send the JSON format to any port on localhost, making it possible to send the parsed problem data to private tools
- Added support for the acm.sgu.ru problems on Codeforces and added a parser for Jutge
- Removed the Bayan parser

## 1.2.2 - May 5th, 2018
- Fixed the Codeforces and the CodeChef parser

## 1.2.1 - April 13th, 2018
- Reverted Codeforces parser back to my own implementation

## 1.2.0 - April 9th, 2018
- Fixed USACO parser
- Reverted Codeforces parser back to the CHelper one
- Switched the new Google Code Jam parser to the CHelper one
- Added parsers for USACO Training, DevSkill, DMOJ, URI Online Judge, LightOJ, SPOJ and Panda Online Judge

## 1.1.0 - April 1st, 2018
- Added support for the new Google Code Jam website
- Updated all dependencies
- Removed all default exports

## 1.0.4 - February 23rd, 2018
- Added support for contests and problems in Codeforces groups

## 1.0.3 - February 19th, 2018
- Switched the Codeforces problem parser from the default one in the CHelper plugin to a custom one, because the one in the CHelper plugin is not working properly at the moment

## 1.0.2 - December 31st, 2017
- Fixed a bug in the HackerEarth contest parser where it couldn't parse contests where the problems were divided into sets

## 1.0.1 - December 23rd, 2017
- Switched to the Kattis parser for custom tasks to fix compatibility with CHelper 4.1.11

## 1.0.0 - December 10th, 2017
- Initial release
